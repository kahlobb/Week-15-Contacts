// 2 methods that be used to send/update requests - 'put' & 'get'
// The update requests are going to add new inputs or delete inputs from contact
const CONTACTS_ENDPOINT = 'https://64671c29ba7110b663af9908.mockapi.io/api/contacts';

class ContactsApi {
    get = async () => {
        try {
            const resp = await fetch(CONTACTS_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oops, looks like fetchContacts had an issue.', e);
        }
    };

    put = async (contact) => {
        try {
            const resp = await fetch(`${CONTACTS_ENDPOINT}/${contact.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating Contacts had an issue.', e);
        }
    };
}

export const contactsApi = new ContactsApi();