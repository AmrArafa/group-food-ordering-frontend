export const rootApi = `http://localhost:3000`;
export const AdminLogin = `http://localhost:3000/admin/login`
export const AdminRoot = `http://localhost:3000/admin`

// Items
export const itemsApi = `${rootApi}/items`;
export const itemApi = (id) => `${itemsApi}/${id}`;

export const usersApi = `${rootApi}/users`;
export const userApi = (id) => `${usersApi}/${id}`;

export const AdminOrders = `${AdminRoot}/orders`;
export const AdminOrder = (id) => `${AdminOrders}/${id}`;

export const AdminitemsApi = `${AdminRoot}/items`;
export const AdminitemApi = (id) => `${AdminitemsApi}/${id}`;

export const AdminusersApi = `${AdminRoot}/users`;
export const AdminuserApi = (id) => `${AdminusersApi}/${id}`;

export const adminsApi = `${AdminRoot}/admins`;
export const adminApi = (id) => `${adminsApi}/admin/${id}`;

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
export const AdminDashBoard = `${AdminRoot}/dashboard`;

export const adminOrders = `${AdminRoot}/orders`;
export const adminOrder = (id) => `${adminOrders}/${id}`;

export const groups = `${rootApi}/groups`;
export const orders = `${rootApi}/orders`;
export const oneOrder = (id) => `${orders}/${id}`;
export const charges = `${rootApi}/charges`;
export const oneGroup = (id) => `${groups}/${id}`;

export const actionCable = (token) => `${rootApi}/cable?token=${token}`;

export const oneOrderInHistory = (id) => `${orders}?user_id=${id}`;

export const adminOrderFilter = (created_at) => `${adminOrders}/filter/${created_at}`

export const userLogin = `http://localhost:3000/login.json`

export const notifications = `${rootApi}/notifications`;
export const userNotifications = (id) => `${notifications}?user_id=${id}`;

