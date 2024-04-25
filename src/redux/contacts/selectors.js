

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectNameFilter = state => state.filters.name;
export const selectModal = state => state.contacts.isOpenModal;
export const selectDeletedContact = state => state.contacts.deletedContact;