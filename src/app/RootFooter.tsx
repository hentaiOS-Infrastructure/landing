const RootFooter = () => {
  return (
    <div className="flex w-full items-center justify-center bg-neutral-200 pt-6 pb-12">
      <div className="grid w-full grid-cols-1 justify-center md:w-1/2 md:grid-cols-3">
        <section>
          <h3 className="font-bold">Docs</h3>
        </section>
        <section>
          <h3 className="font-bold">Community</h3>
        </section>
        <section>
          <h3 className="font-bold">More</h3>
        </section>
      </div>
    </div>
  );
};

export default RootFooter;
