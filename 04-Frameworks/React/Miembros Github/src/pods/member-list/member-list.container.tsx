import React from "react";
import { OrgContext } from "../../core/providers/org-context";
import { getMemberDetail, getMemberList } from "./api/api";
import { MemberListComponent } from "./member-list.component";
import { mapMemberFromApiToVm } from "./member-list.mapper";
import type { MemberDetail, MemberEntity } from "./member-list.vm";

export const MemberListContainer: React.FC = () => {
  const { organization, setOrganization } = React.useContext(OrgContext);
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [localFilter, setLocalFilter] = React.useState(organization);
  const [open, setOpen] = React.useState(false);
  const [selectedMember, setSelectedMember] = React.useState<MemberDetail | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [totalPages, setTotalPages] = React.useState(1);
  const [page, setPage] = React.useState(1);

  const loadMembers = (org: string, page: number) => {
    setLoading(true)

    getMemberList(org, page)
      .then(({members: apiMembers, totalPages: total}) => {
        const viewModels = apiMembers.map(mapMemberFromApiToVm);

        setTimeout(() => {
          setMembers(viewModels);
          setTotalPages(total);
          setLoading(false);
        }, 800);
      })
      .catch((error) => {
          console.error(error);
          setMembers([]);
          setTotalPages(1)
          setLoading(false);
      }
    );
  };

  const handleSearch = () => {
    setPage(1);
    setOrganization(localFilter);
    loadMembers(localFilter, page);
  };

  React.useEffect(() => {
    loadMembers(organization, page);
  }, [organization, page]);

  const handleOpenDetail = (username: string) => {
    getMemberDetail(username).then((data) => {
      setSelectedMember(data);
      setOpen(true);
    });
  };

  const handleClose = () => setOpen(false);

  return (
  <main>
    <MemberListComponent 
      members={members} 
      filter={localFilter} 
      onFilterChange={setLocalFilter} 
      onSearch={handleSearch} 
      onOpenDetail={handleOpenDetail}
      loading={loading}
      page={page}
      onPageChange={setPage}
      totalPages={totalPages}
      open={open}
      selectedMember={selectedMember}
      handleClose={handleClose}
    />
  </main>
  );
};