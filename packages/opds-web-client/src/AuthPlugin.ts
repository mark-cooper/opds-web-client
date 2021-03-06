import { AuthFormProps, AuthButtonProps } from "./components/AuthProviderSelectionForm";
import { AuthMethod, AuthCredentials } from "./interfaces";

/** Applications can implement this interface if they would like to support authentication
    methods other than basic auth. A list of `AuthPlugin`s can be passed as a prop to the
    `OPDSCatalog` component. */
interface AuthPlugin {
  type: string;
  lookForCredentials: () => { credentials?: AuthCredentials; error?: string; } | void;
  formComponent: new(props: AuthFormProps<AuthMethod>) => __React.Component<AuthFormProps<AuthMethod>, any>;
  buttonComponent: new(props: AuthButtonProps<AuthMethod>) => __React.Component<AuthButtonProps<AuthMethod>, any>;
}

export default AuthPlugin;