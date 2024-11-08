import { mount } from '@vue/test-utils';
import CommentsPage from '../src/views/CommentsPage.vue';
import flushPromises from 'flush-promises';

const mockComments = [
    { id: 1, name: 'Comment 1', body: 'This is comment 1' },
    { id: 2, name: 'Comment 2', body: 'This is comment 2' },
    { id: 3, name: 'Comment 3', body: 'This is comment 3' },
];

describe('CommentsPage.vue', () => {
    it('fetches and displays comments correctly', async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockComments),
            })
        );

        const wrapper = mount(CommentsPage);

        await flushPromises();

        expect(global.fetch).toHaveBeenCalledTimes(1);

        const commentItems = wrapper.findAll('.comment-item');

        expect(commentItems.length).toBeGreaterThan(0);

        commentItems.forEach((itemWrapper, index) => {
            const comment = mockComments[index];
            expect(itemWrapper.text()).toContain(comment.name);
            expect(itemWrapper.text()).toContain(comment.body);
        });
    });
});
