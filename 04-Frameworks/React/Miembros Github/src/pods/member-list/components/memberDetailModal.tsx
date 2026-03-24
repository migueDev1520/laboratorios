import React from 'react';

import { 
  Dialog, DialogTitle, DialogContent, DialogActions, 
  Button, Avatar, Typography, Box, Chip 
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import type { MemberDetail } from '../member-list.vm';


interface Props {
  member: MemberDetail | null;
  open: boolean;
  onClose: () => void;
}

export const MemberDetailModal: React.FC<Props> = (props) => {
  const { open, onClose, member }  = props

  if (!member) return;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        User Profile
      </DialogTitle>
      
      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, py: 2 }}>
          <Avatar 
            src={member.avatar_url} 
            sx={{ width: 120, height: 120, boxShadow: 3 }} 
          />
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {member.name || member.login}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="center">
            {member.bio || "No bio available for this user."}
          </Typography>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mt: 1 }}>
            {member.company && (
              <Chip icon={<BusinessIcon />} label={member.company} variant="outlined" />
            )}
            {member.location && (
              <Chip icon={<LocationOnIcon />} label={member.location} variant="outlined" />
            )}
          </Box>

          <Box sx={{ display: 'flex', gap: 4, mt: 2 }}>
            <Box textAlign="center">
              <Typography variant="h6">{member.followers}</Typography>
              <Typography variant="caption">Followers</Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="h6">{member.public_repos}</Typography>
              <Typography variant="caption">Repos</Typography>
            </Box>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained" fullWidth sx={{ borderRadius: '8px' }}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};