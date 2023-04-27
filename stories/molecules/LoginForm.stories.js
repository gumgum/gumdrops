import Checkbox from '../../components/molecules/Checkbox';
import LoginForm from '../../components/molecules/LoginForm';
import FormGroup from '../../components/molecules/FormGroup';
import FormGroupLabel from '../../components/atoms/FormGroupLabel';
import Button from '../../components/atoms/Button';
import TextInput from '../../components/atoms/TextInput';

export default {
    title: 'Molecules/LoginForm',
    component: LoginForm,
    parameters: {
        actions: {
            handles: ['click', '.gds-button--primary'],
            handles: ['click', '.gds-text--link']
        }
    },
    argTypes: {
        capText: { control: 'text' },
        logoText: { control: 'text' },
        recoveryText: { control: 'text' },
        hideLogo: { control: 'boolean' }
    }
};

const Template = args => {
    return (
        <LoginForm
            {...args}
            onSubmit={e => {
                e.preventDefault();
                console.log('submit');
            }}
            recoveryFn={e => {
                e.preventDefault();
                console.log('close');
            }}>
            <FormGroup className="-m-b-1">
                <FormGroupLabel text="username" />
                <TextInput name="username" type="text" placeholder="username" />
            </FormGroup>
            <FormGroup className="-m-b-2">
                <FormGroupLabel text="Password" />
                <TextInput name="password" type="password" placeholder="password123" />
            </FormGroup>
            <FormGroup className="-m-b-2">
                <Checkbox name="staySignedIn" label="Stay signed in" />
            </FormGroup>
            <Button type="submit" className="gds-button--block" context="primary">
                Login
            </Button>
        </LoginForm>
    );
};

export const Default = Template.bind({});

Default.args = {
    capText: 'Welcome',
    logoText: 'Gumdrops',
    recoveryText: 'Forgot Password?'
};

Default.parameters = { controls: { exclude: ['children'] } };
