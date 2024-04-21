const ActiveLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className={({ isActive }) =>
        isActive
          ? "text-blue-400 lg:text-blue-700 transition cursor-pointer text-xl font-bold border-b-2"
          : "text-xl font-bold"
      }
    >
      {children}
    </a>
  );
};

export default ActiveLink;
