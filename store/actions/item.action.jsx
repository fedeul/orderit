export const SELECT_ITEM = "SELECT_ITEM";
export const FILTERED_ITEM = "FILTERED_ITEM";

export const selectItem = (id) => ({
  type: SELECT_ITEM,
  itemID: id,
});

export const filteredItem = (id) => ({
  type: FILTERED_ITEM,
  categoryID: id,
});
