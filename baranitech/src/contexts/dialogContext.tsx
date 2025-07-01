import React, { createContext, useContext, useState, ReactNode, JSXElementConstructor, JSX } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    useTheme,
} from '@mui/material';
import { DialogStyled } from '../pages/styles';

interface ConfirmDialogOptions {
    title?: string;
    content?: string | JSX.Element;
    onConfirm: () => void;
    onCancel?: () => void;
    bgvariant?: 'light' | 'dark'; // add this line
    hideButtons?: boolean;
}

interface DialogContextType {
    confirm: (options: ConfirmDialogOptions) => void;
    handleCancel: () => void;
}

const DialogContext = createContext<DialogContextType | undefined>(undefined);

export const useDialog = () => {
    const context = useContext(DialogContext);
    if (!context) throw new Error('useDialog must be used within a DialogProvider');
    return context;
};


export const DialogProvider = ({ children }: { children: ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<ConfirmDialogOptions | null>(null);
    const theme = useTheme()

    const confirm = (opts: ConfirmDialogOptions) => {
        setOptions(opts);
        setOpen(true);
    };

    const handleConfirm = () => {
        options?.onConfirm();
        setOpen(false);
    };

    const handleCancel = () => {
        options?.onCancel?.();
        setOpen(false);
    };

    return (
        <DialogContext.Provider value={{ confirm, handleCancel }}>
            {children}
            <DialogStyled open={open} onClose={handleCancel} hideBackdrop bgvariant={options?.bgvariant}>
                <DialogTitle>{options?.title || 'Confirm'}</DialogTitle>
                <hr />
                <DialogContent>
                    {
                        typeof options?.content === 'string' ? (
                            <DialogContentText> {options?.content || 'Are you sure you want to proceed?'}</DialogContentText>
                          ) : (
                            options?.content // ← ✅ render your <FormComponent />
                          )
                    }
                       
                </DialogContent>
                {!options?.hideButtons && (
                <DialogActions>
                    <Button variant="contained" color="secondary" onClick={handleCancel}>Cancel</Button>
                    <Button variant="contained" color="secondary" onClick={handleConfirm} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
                )}
            </DialogStyled>
        </DialogContext.Provider>
    );
};