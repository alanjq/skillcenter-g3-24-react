export const CampoTexto = ({ etiqueta, onChange }) => {
    return (
        <label> {etiqueta}:
            <input type="text" placeholder={etiqueta}
                onChange={({ target }) => onChange(target.value)}
            />
        </label>
    )
}
