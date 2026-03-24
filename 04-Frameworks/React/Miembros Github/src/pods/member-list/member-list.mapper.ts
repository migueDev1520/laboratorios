import * as AM from "./member-list.vm"; 
import * as VM from "./member-list.vm";   

export const mapMemberFromApiToVm = (member: AM.MemberEntity): VM.MemberEntity => ({
  id: member.id,
  login: member.login,
  avatar_url: member.avatar_url,
});