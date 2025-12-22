type ButtonBaseProps = {
  label: string;
  isCancel?: boolean;
};

type ButtonSubmitProps = ButtonBaseProps & {
  type: "submit";
  onClick?: never;
};

type ButtonButtonProps = ButtonBaseProps & {
  type: "button";
  onClick: () => void;
};

type Props = ButtonSubmitProps | ButtonButtonProps;


const ButtonCustom = ({ label, type, isCancel, onClick }: Props) => {
    return <button className={`m-4 transition-colors duration-300 text-white text-shadow-strong font-bold py-2 px-4 rounded-3xl bg-linear-to-tr hover:shadow-xl hover:shadow-black/40 hover:cursor-pointer
        ${isCancel ? 'from-red-400 to-red-800 hover:from-red-800 hover:to-red-400' : 
        'from-rosa-claro to-rosa hover:from-rosa hover:to-rosa-claro'}`} 
        type={type} onClick={onClick}>{label}</button>;
}

export default ButtonCustom;