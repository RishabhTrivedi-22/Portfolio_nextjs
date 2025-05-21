export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#techIcon-gradient)]"/>
      <svg className="size-0 absolute">
        <linearGradient id="techIcon-gradient">
          <stop offset='0%' stopColor="rgb(110 231 183)" />
          <stop offset='100%' stopColor="rgb(56 189 248)" />
        </linearGradient>
      </svg>
    </>
  );
};
