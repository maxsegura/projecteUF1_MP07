import { mount } from '@vue/test-utils';
import UsersPage from '../src/views/UsersPage.vue';
import axios from 'axios';
import { vi } from 'vitest';

describe('UsersPage.vue', () => {
    it('fetches and displays users correctly', async () => {
        const mockUsers = [
            { id: 1, firstName: 'John', lastName: 'Doe', age: 25, email: 'john.doe@example.com' },
            { id: 2, firstName: 'Jane', lastName: 'Smith', age: 30, email: 'jane.smith@example.com' },
        ];

        vi.spyOn(axios, 'get').mockResolvedValueOnce({ data: { users: mockUsers } });

        const wrapper = mount(UsersPage);

        await wrapper.vm.$nextTick();
        await new Promise(resolve => setTimeout(resolve, 100));

        const userItems = wrapper.findAll('li');
        expect(userItems.length).toBe(mockUsers.length);

        userItems.forEach((userItem, index) => {
            const user = mockUsers[index];
            expect(userItem.text()).toContain(user.firstName);
            expect(userItem.text()).toContain(user.lastName);
            expect(userItem.text()).toContain(user.age.toString());
            expect(userItem.text()).toContain(user.email);
        });
    });
});



