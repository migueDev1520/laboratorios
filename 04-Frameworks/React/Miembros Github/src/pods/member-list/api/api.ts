import type { MemberDetail, PaginantedMembers } from "../member-list.vm";


export const getMemberList = async (org: string, page: number): Promise<PaginantedMembers> => { 
  const response = await fetch(`https://api.github.com/orgs/${org}/members?page=${page}&per_page=5`);
  
  if (!response.ok) return { members: [], totalPages: 1 };

  const members = await response.json();
  const linkHeader = response.headers.get("Link");
  
  let totalPages = page; 

  if (linkHeader) {
    const match = linkHeader.match(/page=(\d+)[^>]*>; rel="last"/);
    
    if (match && match[1]) {
      totalPages = parseInt(match[1]);
    } else if (linkHeader.includes('rel="prev"') && !linkHeader.includes('rel="next"')) {
      totalPages = page;
    }
  }

  return { members, totalPages };
};

export const getMemberDetail = (username: string): Promise<MemberDetail> => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((response) => (response.ok ? response.json() : null));
};