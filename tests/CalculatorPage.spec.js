import { mount } from '@vue/test-utils'
import CalculatorPage from '../src/views/CalculatorPage.vue'

describe('CalculatorPage.vue', () => {
    it('should display "71" when clicking 7 and 1', async () => {
        const wrapper = mount(CalculatorPage)

        await wrapper.find('button:nth-child(5)').trigger('click')
        await wrapper.find('button:nth-child(13)').trigger('click')

        expect(wrapper.vm.display).toBe('71')
    })

    it('should display "Error" for invalid operations', async () => {
        const wrapper = mount(CalculatorPage)

        await wrapper.find('button:nth-child(5)').trigger('click')
        await wrapper.find('button:nth-child(8)').trigger('click')
        await wrapper.find('button:nth-child(18)').trigger('click')

        expect(wrapper.vm.display).toBe('Error')
    })

    it('should display "8" when clicking 7 and 1 then pressing "C" to clear', async () => {
        const wrapper = mount(CalculatorPage)

        await wrapper.find('button:nth-child(5)').trigger('click')
        await wrapper.find('button:nth-child(9)').trigger('click')
        await wrapper.find('button:nth-child(1)').trigger('click')

        expect(wrapper.vm.display).toBe('')

        await wrapper.find('button:nth-child(6)').trigger('click')

        expect(wrapper.vm.display).toBe('8')
    })
})
