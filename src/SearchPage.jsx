/* eslint-disable no-undef */
// eslint-disable-next-line react/prop-types
export default function SearchPage({ routeParams }) {
  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    document.title = `Has buscado ${routeParams.query}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    // eslint-disable-next-line react/prop-types
    <h1>Has buscado {routeParams.query}</h1>
  );
}
