const PageHeader = () => {
  return (
    <header className="flex items-center justify-between max-w-7xl mx-auto w-full mb-8 px-4 pt-14">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Логотип" className="w-10 h-10" />
        <span className="font-semibold text-lg sm:text-xl">PPTSecrets</span>
      </div>
      <p className="font-semibold text-sm sm:text-base text-gray-800">
        Онлайн-курс "<span className="text-blue-600">Секреты PowerPoint</span>"
      </p>
    </header>
  );
};

export default PageHeader;