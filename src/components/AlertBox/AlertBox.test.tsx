
import React from 'react';
import type { AlertType } from '../../types';
import { AlertBox } from './AlertBox';

export const AlertBoxTest: React.FC<{ type: AlertType }> = ({ type }) => {
    return (
        type === "success" ? (
            <AlertBox
                type="success"
                message="Your profile has been updated successfully!"
                onClose={() => alert('Alert closed')}>
                <p className="text-sm">You can now continue using the application.</p>
            </AlertBox>
        ) : type === "error" ? (
            <AlertBox
                type="error"
                message="An error occurred!"
                onClose={() => alert('Alert closed')}>
                <p className="text-sm">Please try again.</p>
            </AlertBox>
        ) : type === "warning" ? (
            <AlertBox
                type="warning"
                message="Warning: Something might be wrong."
                onClose={() => alert('Alert closed')}>
                <p className="text-sm">Please check your input.</p>
            </AlertBox>
        ) : type === "info" ? (
            <AlertBox
                type="info"
                message="Information"
                onClose={() => alert('Alert closed')}>
                <p className="text-sm">Here's some info.</p>
            </AlertBox>
        ) : null
    );
};