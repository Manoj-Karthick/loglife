const Feature = () => {
  return (
    <div className="m-20">
      <hr></hr>
      <div className="mt-10 text-4xl font-bold text-center">Log Hub</div>
      <div className="mt-10 grid grid-cols-3 gap-8">
        <div>
          <div className="grid bg-green-200 text-green-600 rounded-lg w-12 h-12 place-items-center mb-3">
            E
          </div>
          <div className="text-xl font-semibold mb-2">Expiry</div>
          <div className="text-base text-zinc-600">
            Expiration dates don&apos;t wait, and neither should you. Manage
            them seamlessly.
          </div>
        </div>
        <div>
          <div className="grid bg-amber-200 text-amber-600 rounded-lg w-12 h-12 place-items-center mb-3">
            H
          </div>
          <div className="text-xl font-semibold mb-2">Habit</div>
          <div className="text-base text-zinc-600">
            Small steps lead to big results. Track your habits effortlessly with
            our app.
          </div>
        </div>
        <div>
          <div className="grid bg-indigo-200 text-indigo-600 rounded-lg w-12 h-12 place-items-center mb-3">
            F
          </div>
          <div className="text-xl font-semibold mb-2">Finance</div>
          <div className="text-base text-zinc-600">
            Covering budgeting to investments, our finance tracker gets packed
            with features.
          </div>
        </div>
        <div>
          <div className="grid bg-red-200 text-red-600 rounded-lg w-12 h-12 place-items-center mb-3">
            G
          </div>
          <div className="text-xl font-semibold mb-2">Gym</div>
          <div className="text-base text-zinc-600">
            Track your gains, see your progress. Our gym tracker keeps you
            motivated.
          </div>
        </div>
        <div>
          <div className="grid bg-pink-200 text-pink-600 rounded-lg w-12 h-12 place-items-center mb-3">
            T
          </div>
          <div className="text-xl font-semibold mb-2">Todo</div>
          <div className="text-base text-zinc-600">
            Get things done, one task at a time. Our todo app helps you conquer
            your day.
          </div>
        </div>
        <div>
          <div className="grid bg-orange-200 text-orange-600 rounded-lg w-12 h-12 place-items-center mb-3">
            G
          </div>
          <div className="text-xl font-semibold mb-2">Goal</div>
          <div className="text-base text-zinc-600">
            Goals aren&apos;t just dreams, they&apos;re destinations. Let our
            app be your roadmap.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
