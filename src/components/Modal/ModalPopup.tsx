import { Modal } from 'antd';

interface ModalpopupType {
    children?: JSX.Element;
    visible?: boolean;
    onCancel?: any;
    style?: object;
}

const ModalPopup = ({ children, visible, onCancel, style }: ModalpopupType) => {

    return (
        <>
            <Modal
                style={style}
                visible={visible}
                onCancel={onCancel}
                footer={null}
                width={500}
            >
                {children}
            </Modal>
        </>
    )
}
export default ModalPopup;