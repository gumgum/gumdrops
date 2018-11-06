/* globals mount shallow */
import React from 'react';
import SearchSelect from '../../components/molecules/SearchSelect';

const options = [
    { id: 1, title: 'Lorem ipsum dolor sit amet' },
    { id: 2, title: 'Consectetur adipiscing elit ' },
    { id: 3, title: 'Sed do eiusmod tempor incididunt ut' },
    { id: 4, title: 'Labore et dolore magna aliqua' },
    { id: 5, title: 'Ut enim ad minim veniam' },
    { id: 6, title: 'Quis nostrud exercitation ullamco' },
    { id: 7, title: 'Laboris nisi ut aliquip ex ea commodo' },
    { id: 8, title: 'Consequat Duis' },
    { id: 9, title: 'Aute irure dolor in reprehenderit ' },
    { id: 10, title: 'In voluptate velit esse cillum dolore' },
    { id: 11, title: 'Eu fugiat nulla pariatur' },
    { id: 12, title: 'Deserunt mollit anim id est laborum' }
];

const defaultProps = {
    onSelect: () => {},
    onChange: () => {}
};

const addEventListener = global.document.addEventListener;
const removeEventListener = global.document.removeEventListener;

describe('Expect <SearchSelect>', () => {
    it('to render', () => {
        const wrapper = shallow(<SearchSelect options={options} {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('to render a loading component', () => {
        const Loader = jest.fn();
        mount(<SearchSelect options={options} {...defaultProps} isLoading renderLoader={Loader} />);
        expect(Loader).toBeCalled();
    });

    it('to add event listeners to the document and open when focused', () => {
        global.document.addEventListener = jest.fn();
        const wrapper = mount(<SearchSelect options={options} {...defaultProps} />);
        const input = wrapper.find('input[name="searchSelect"]').first();
        input.simulate('focus');
        expect(global.document.addEventListener).toBeCalledTimes(2);
        expect(global.document.addEventListener.mock.calls[0][0]).toBe('click');
        expect(global.document.addEventListener.mock.calls[1][0]).toBe('focus');
        expect(wrapper.state().isOpen).toBe(true);
        global.document.addEventListener = addEventListener;
    });

    it('to remove event listeners and close when capturing outside events', () => {
        global.document.removeEventListener = jest.fn();
        const wrapper = mount(<SearchSelect options={options} {...defaultProps} />);
        const instance = wrapper.instance();
        instance._eventOutside({ target: document.createElement('div') });
        expect(global.document.removeEventListener).toBeCalledTimes(2);
        expect(global.document.removeEventListener.mock.calls[0][0]).toBe('click');
        expect(global.document.removeEventListener.mock.calls[1][0]).toBe('focus');
        expect(wrapper.state().isOpen).toBe(false);
        global.document.removeEventListener = removeEventListener;
    });

    it('to remove event listeners and close when clearing selected options', () => {
        global.document.removeEventListener = jest.fn();
        const wrapper = mount(<SearchSelect options={options} {...defaultProps} />);

        const input = wrapper.find('input[name="searchSelect"]').first();
        input.simulate('focus');
        wrapper.setState({ searchTerm: 'search term' });
        expect(wrapper.state().isOpen).toBe(true);

        const clear = wrapper.find('button[name="clearSearchSelect"]').first();
        clear.simulate('click');

        expect(global.document.removeEventListener).toBeCalledTimes(2);
        expect(global.document.removeEventListener.mock.calls[0][0]).toBe('click');
        expect(global.document.removeEventListener.mock.calls[1][0]).toBe('focus');
        expect(wrapper.state().isOpen).toBe(false);
        global.document.removeEventListener = removeEventListener;
    });

    it('to remove event listeners and close when clearing selected options', () => {
        global.document.removeEventListener = jest.fn();
        const wrapper = mount(<SearchSelect options={options} {...defaultProps} />);

        const input = wrapper.find('input[name="searchSelect"]').first();
        input.simulate('focus');
        wrapper.setState({ searchTerm: 'search term' });
        expect(wrapper.state().isOpen).toBe(true);

        const clear = wrapper.find('button[name="clearSearchSelect"]').first();
        clear.simulate('click');

        expect(global.document.removeEventListener).toBeCalledTimes(2);
        expect(global.document.removeEventListener.mock.calls[0][0]).toBe('click');
        expect(global.document.removeEventListener.mock.calls[1][0]).toBe('focus');
        expect(wrapper.state().isOpen).toBe(false);
        global.document.removeEventListener = removeEventListener;
    });

    it('to call onSelect when handling a clicked option and update state', () => {
        const onSelect = jest.fn();
        const wrapper = mount(
            <SearchSelect options={options} {...defaultProps} onSelect={onSelect} />
        );
        wrapper.setState({ isOpen: false });
        const inst = wrapper.instance();
        inst.handleOptionClick(options[0]);
        expect(onSelect).toBeCalledWith(options[0]);
        expect(wrapper.state()).toEqual({ isOpen: false, searchTerm: options[0].title });
    });

    it('to call onChange after debounce', () => {
        jest.useFakeTimers();

        const onChange = jest.fn();
        const wrapper = mount(
            <SearchSelect options={options} {...defaultProps} onChange={onChange} />
        );
        const input = wrapper.find('input[name="searchSelect"]').first();
        input.simulate('change', { target: { value: options[0].title } });
        expect(onChange).not.toBeCalled();
        jest.runAllTimers();
        expect(onChange).toBeCalledWith(options[0].title);
    });

    it('to add classes based on size prop', () => {
        const wrapper1 = shallow(<SearchSelect options={options} {...defaultProps} size="xs" />);
        expect(wrapper1).toMatchSnapshot();

        const wrapper2 = shallow(<SearchSelect options={options} {...defaultProps} size="sm" />);
        expect(wrapper2).toMatchSnapshot();

        const wrapper3 = shallow(<SearchSelect options={options} {...defaultProps} size="md" />);
        expect(wrapper3).toMatchSnapshot();
    });
});
