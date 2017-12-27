export const rootApi = `http://localhost:3000`;

// Items
export const itemsApi = `${rootApi}/items`;
export const itemApi = (id) => `${itemsApi}/${id}`;
