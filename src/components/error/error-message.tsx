import {IconAlertOctagon} from '@tabler/icons-react';
import * as React from 'react';
import './error-message.css';

export const ErrorMessage: React.FC = ({children}) => (
	<div className="error-message">
		<IconAlertOctagon />
		<div className="message">{children}</div>
	</div>
);
