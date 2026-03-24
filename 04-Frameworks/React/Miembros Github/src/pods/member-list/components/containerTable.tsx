import React from "react";
import { Avatar, Box, Skeleton, Table, TableContainer ,TableBody, TableCell, TableHead, TableRow, Paper } from "@mui/material"

import type { MemberEntity } from "../member-list.vm";

interface Props {
  members: MemberEntity[];
  loading: boolean;
  onOpenDetail: (username: string) => void;
}


export const ContainerTable: React.FC<Props> = (props) => {
  const { members, loading, onOpenDetail } = props

  return (
    <section>
      {loading ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[1, 2, 3, 4, 5].map((item) => (
            <Skeleton 
              key={item} 
              variant="rectangular" 
              height={100} 
              sx={{ borderRadius: '12px' }} 
            />
          ))}
        </Box>
      ) : (
        <TableContainer component={Paper} elevation={2} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Table>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Avatar</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>ID</TableCell>
                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Username</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((member) => (
                <TableRow 
                  key={member.id}
                  onClick={() => onOpenDetail(member.login)}
                  sx={{
                    cursor: 'pointer',
                    '&:hover' : {backgroundColor: '#f5f5f5'}
                  }}
                >
                  <TableCell>
                    <Avatar 
                      src={member.avatar_url} 
                      sx={{ width: 80, height: 80, boxShadow: 2 }} 
                    />
                  </TableCell>
                  <TableCell sx={{ fontWeight: '500', color: '#666' }}>{member.id}</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>{member.login}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </section>
  )
}