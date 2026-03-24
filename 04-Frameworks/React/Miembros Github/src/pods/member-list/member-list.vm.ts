export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export interface MemberDetail {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  location: string;
  company: string;
  public_repos: number;
  followers: number;
}

export interface PaginantedMembers {
  members: MemberEntity[];
  totalPages: number;
}