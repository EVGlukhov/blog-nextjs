import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
        Ошибка 404
      </p>

      <h1 className="text-3xl font-semibold text-zinc-950 sm:text-5xl">
        Пост не найден
      </h1>

      <p className="text-lg leading-8 text-zinc-600">
        Возможно, пост был удалён или такого адреса не существует.
      </p>

      <Link
        href="/posts"
        className="rounded-md bg-zinc-900 px-5 py-3 font-medium text-white hover:bg-zinc-700"
      >
        Вернуться к постам
      </Link>
    </section>
  );
}