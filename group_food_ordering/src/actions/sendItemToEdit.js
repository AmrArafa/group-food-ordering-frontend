export const SEND_ITEM_TO_EDIT = 'SEND_ITEM_TO_EDIT';



export const sendItemToEdit = (item) => {
    return {
        type: SEND_ITEM_TO_EDIT,
        item
    }
}

