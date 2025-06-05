import { createContext, useContext, useState, ReactNode } from 'react';
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
    content?: string;
    onConfirm: () => void;
    onCancel?: () => void;
}

interface DialogContextType {
    confirm: (options: ConfirmDialogOptions) => void;
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
        <DialogContext.Provider value={{ confirm }}>
            {children}
            <DialogStyled open={open} onClose={handleCancel} hideBackdrop>
                <DialogTitle>{options?.title || 'Confirm'}</DialogTitle>
                <hr />
                <DialogContent>
                    <DialogContentText>
                        {options?.content || 'Are you sure you want to proceed?'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleConfirm} autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </DialogStyled>
        </DialogContext.Provider>
    );
};