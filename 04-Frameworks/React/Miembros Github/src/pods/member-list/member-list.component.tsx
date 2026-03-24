import React from "react";
import type { MemberDetail, MemberEntity } from "./member-list.vm";
import { Header } from "./components/Header";
import { SearchToolbar } from "./components/searchToolbar";
import { ContainerTable } from "./components/containerTable";
import { PaginationBar } from "./components/paginationBar";
import { MemberDetailModal } from "./components/memberDetailModal";

interface Props {
  members: MemberEntity[];
  filter: string;
  onFilterChange: (value: string) => void;
  onSearch: () => void;
  onOpenDetail: (username: string) => void;
  loading: boolean;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  open: boolean;
  handleClose: () => void;
  selectedMember: MemberDetail | null;
}

export const MemberListComponent: React.FC<Props> = (props) => {
  const { members, filter, onFilterChange, onSearch, onOpenDetail, loading, page, totalPages, onPageChange, open, selectedMember, handleClose } = props;
 
  return (
    <>
      <Header />
      <SearchToolbar 
        filter={filter}
        onFilterChange={onFilterChange}
        onSearch={onSearch}
        loading={loading}
      />
      <ContainerTable 
        members={members}
        loading={loading}
        onOpenDetail={onOpenDetail}
      />
      < PaginationBar 
        loading={loading}
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <MemberDetailModal 
        member={selectedMember}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};