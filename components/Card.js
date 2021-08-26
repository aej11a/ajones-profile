export const Card = ({
  title,
  subtitle,
  content,
  picSrc,
  picAlt,
  id,
  sidebar,
}) => (
  <div className="md:w-3/5 items-center flex shadow-xl" id={id}>
    <div className="bg-gray-200 rounded-lg flex flex-col md:flex-row w-full">
      <div className="m-6 md:w-3/5 xl:w-4/5">
        <h1 className="border-b-2 mb-4 border-gray-800 p-4 pl-0 pt-0 m-1">
          {title}
        </h1>
        {subtitle && (
          <h3 className="border-b-2 mb-4 border-gray-800 p-4 pl-0 pt-0 m-1">
            {subtitle}
          </h3>
        )}
        {content}
      </div>
      <div className="md:h-full md:w-2/5">
        <picture>
          <img
            src={picSrc}
            alt={picAlt}
            className="md:object-scale-down w-full md:w-100 md:rounded-r-md"
            style={{ maxWidth: "unset" }}
          />
        </picture>
        {sidebar}
      </div>
    </div>
  </div>
);
