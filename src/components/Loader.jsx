export default function Loader({ size = 48 }) {
  const style = { width: size, height: size };
  return <div className="loader" style={style} aria-label="Cargando..." />;
}