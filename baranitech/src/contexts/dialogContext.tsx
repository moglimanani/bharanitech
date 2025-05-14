import { createContext, useContext, useState, ReactNode } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material';

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
            <Dialog open={open} onClose={handleCancel}>
                <DialogTitle>{options?.title || 'Confirm'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {options?.content || 'Are you sure you want to proceed?'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button onClick={handleConfirm} color="error" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </DialogContext.Provider>
    );
};