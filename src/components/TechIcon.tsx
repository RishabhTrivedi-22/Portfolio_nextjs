export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#techIcon-gradient)]"/>
      <svg className="size-0 absolute">
        <linearGradient id="techIcon-gradient">
          <stop offset='0%' stopColor="rgb(255, 0, 80)" /> 
          <stop offset='100%' stopColor="rgb(138, 43, 226)" />
        </linearGradient>
      </svg>
    </>
  );
};
