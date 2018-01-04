export const rootApi = `http://localhost:3000`;
export const AdminLogin = `http://localhost:3000/admin/login`

// Items
export const itemsApi = `${rootApi}/items`;
export const itemApi = (id) => `${itemsApi}/${id}`;

export const usersApi = `${rootApi}/users`;
export const userApi = (id) => `${usersApi}/${id}`;

export const AdminitemsApi = `${rootApi}/admin/items`;
export const AdminitemApi = (id) => `${AdminitemsApi}/${id}`;

export const AdminusersApi = `${rootApi}/admin/users`;
export const AdminuserApi = (id) => `${AdminusersApi}/${id}`;
