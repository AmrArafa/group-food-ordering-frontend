export const rootApi = `http://localhost:3000`;
export const AdminLogin = `http://localhost:3000/admin/login`
export const AdminRoot = `http://localhost:3000/admin`

// Items
export const itemsApi = `${rootApi}/items`;
export const itemApi = (id) => `${itemsApi}/${id}`;

export const usersApi = `${rootApi}/users`;
export const userApi = (id) => `${usersApi}/${id}`;

export const AdminitemsApi = `${AdminRoot}/items`;
export const AdminitemApi = (id) => `${AdminitemsApi}/${id}`;

export const AdminusersApi = `${AdminRoot}/users`;
export const AdminuserApi = (id) => `${AdminusersApi}/${id}`;

export const adminsApi = `${AdminRoot}/admins`;
export const adminApi = (id) => `${adminsApi}/${id}`;

export const adminInvitations = `${AdminRoot}/invitations`;
export const getAdminInvitaions = (token) => `${AdminRoot}/admins/${token}`;
export const adddAdmin = (token) => `${AdminRoot}/registrations/${token}`;

export const mostItem = `${AdminRoot}/mostitem`;
export const lessItem = `${AdminRoot}/lessitem`;
export const mostUser = `${AdminRoot}/mostuser`;
export const lessUser = `${AdminRoot}/lessuser`;
export const totalSold = `${AdminRoot}/totalsold`;
export const totalSoldLastMonth = `${AdminRoot}/soldlastmonth`;
export const totalSoldLastDay = `${AdminRoot}/soldlastday`;
export const totalSoldLastHour = `${AdminRoot}/soldlasthour`;
