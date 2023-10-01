import type { SVGProps } from "react";
import {
  BottomTextUpper,
  BottomTextLower,
} from "../components/svgBased/BottomText";
import { footerLinks } from "./(content)/footerLinks";

const RootFooter = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-neutral-100 pt-6">
      <BottomTextUpper className="mb-10 mt-20 h-32 max-w-[75vw]" />
      <BottomTextLower className="mb-20 h-20" />
      <div className="flex w-full items-center justify-center bg-neutral-200 py-8">
        <div className="flex w-full max-w-screen-xl items-center justify-center">
          <div className="grid w-full grid-cols-1 justify-center gap-4 px-8 md:grid-cols-2 md:gap-12">
            <section>
              <h3 className="font-bold">Unrelated resources</h3>
              <div className="mt-2 h-[1px] w-full bg-neutral-400"></div>
              <ul className="my-4">
                {footerLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="underline underline-offset-4"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-12 text-sm">
                Built by cunnies at hentaiOS Design Team and Rev{" "}
                <span className="line-through">Says Desu</span>.
                <br />A Thryobria Tower Incubator Project.
              </p>
            </section>
            <section className="flex flex-col items-start md:items-end">
              <Thryobria className="h-24" />
              <p className="mt-4 max-w-xs text-sm md:text-right">
                © The hentaiOS Project
                <br />
                Property of the Red Winter Federal Academy Proudly developed in
                Thryobria.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const Thryobria = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 146 118"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M61.375 42.146c-6.428-2.36-10.525-10.063-12.482-15.753.728 10.88 4.464 19.04 5.822 20.616 1.36 1.923-3.956 1.722-5.858 1.068 1.61 1.837 7.01 5.111 9.619 6.504l-3.105 1.09c2.814-.13 9.236-.117 12.626 2.313 3.34 2.395 4.694 7.025 4.794 9.216-.394 1.303-.796 1.946-1.82 2.942 1.272.765 1.771 1.282 2.344 2.324l.66 1.883.534-1.883c.627-.923 1.12-1.432 2.245-2.324-.775-.865-1.14-1.5-1.587-2.942-.31-4.995 2.692-7.941 4.676-9.216 1.984-1.274 9.277-2.716 12.468-2.313-.683-.267-2.998-1.395-2.998-1.395s6.045-4.33 9.543-6.2c-4.174 1.704-5.911.347-5.81-1.067.1-1.414 5.478-8.931 5.252-18.887-4.974 9.398-8.64 12.194-12.102 14.024h3.859c-1.722 3.5-6.175 10.154-10.212 8.783-5.047-1.714-4.84-14.1-3.998-14.474.675-.3 3.163 1.693 4.323 2.727-3.07-2.95-5.454-11.229-6.263-15 .122 2.708-4.373 11.816-6.636 16.032 1.017-1.11 3.34-3.417 4.496-3.76 1.445-.427.946 13.575-4.07 14.212-3.541.45-8.333-5.363-10.085-8.52h3.765Z"
      fill="#3A3A3A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m64.59 27.627.17.038c-4.546.294-13.41-2.305-13.41-5.057 0-5.12 13.306-6.964 22.506-6.964 9.201 0 22.508 1.844 22.508 6.964 0 2.752-8.813 5.333-13.36 5.039l.197-.043c3.633-.795 10.916-2.388 11.631-4.996.513-1.871-3.607-3.18-8.364-4.018-.333.558-1.047 1.504-1.538 1.26-.356-.175-.456-.3-.517-.374-.06-.075-.08-.1-.275-.076-.127.015-.343.27-.617.594-.561.663-1.367 1.616-2.168 1.402-.769-.205-1.312-1.516-1.761-2.6-.19-.456-.361-.872-.527-1.149-2.418-.209-4.385-.287-5.209-.25-3.071-.137-22.042 1.32-20.975 5.21.716 2.615 8.082 4.227 11.709 5.02Z"
      fill="#3A3A3A"
    />
    <path
      d="M64.765 27.67c-3.56-.78-11.156-2.86-11.884-5.517-1.067-3.891 17.904-5.348 20.975-5.21 3.072-.138 22.043 1.319 20.976 5.21-.728 2.656-8.323 4.737-11.883 5.517 4.545.294 13.415-2.764 13.415-5.517 0-5.12-13.307-6.964-22.508-6.964-9.2 0-22.507 1.844-22.507 6.964 0 2.753 8.87 5.811 13.416 5.517ZM72.524 97.965V79.403L65.27 64.13c-6.767 1.414-16.15-5.726-20.446-8.389-4.296-2.663-7.99-10.31-11.426-13.402-3.437-3.093-9.721.42-12.304-8.011-2.066-6.745 4.832-4.223 8.539-2.118-.896-1.212-5.687-5.292-7.97-7.18-8.695-1.16-9.64-8.387-9.025-11.857C6.948 11.697 2.978 4.303 1.704.79 1.31 4.741 7.756 20.31 5.898 20.814c-1.487.402-4.28-.547-5.491-1.072 16.77 11.684 21.102 35.526 21.172 45.986 6.443-14.496 11.9-5.188 13.823 1.278 5.42.155 10.028 2.878 11.655 4.22-1.51-2.4-8.512-8.118-8.512-8.118s-.372-4.395 1.591-2.188c1.964 2.207 2.335 3.676 4.175 4.118 8.27 1.987 23.412 21.432 28.213 32.927ZM73.856 97.965V79.403l7.255-15.274c6.767 1.414 16.15-5.726 20.446-8.389 4.295-2.663 7.99-10.31 11.426-13.402 3.437-3.093 9.721.42 12.304-8.011 2.066-6.745-4.832-4.223-8.539-2.118.896-1.212 5.687-5.292 7.97-7.18 8.695-1.16 9.639-8.387 9.024-11.857 5.691-1.475 9.661-8.87 10.935-12.383.395 3.952-6.053 19.521-4.194 20.025 1.487.402 4.28-.547 5.491-1.072-16.771 11.684-21.103 35.526-21.172 45.986-6.443-14.496-11.9-5.188-13.823 1.278-5.421.155-10.029 2.878-11.655 4.22 1.51-2.4 8.511-8.118 8.511-8.118s.373-4.395-1.591-2.188c-1.963 2.207-2.334 3.676-4.175 4.118C93.8 67.025 78.657 86.47 73.856 97.965Z"
      fill="#3A3A3A"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M69.02 58.963c.037-.037 1.03-2.942 1.943-5.684l.447-1.344 2.135.025 2.134.025 1.17 3.513c1.095 3.283 1.188 3.517 1.413 3.568 1.403.318 3.313 1.08 4.749 1.892l.74.42 3.244-1.61c1.784-.886 3.273-1.61 3.31-1.61.037 0 .734.668 1.548 1.484l1.48 1.485-1.63 3.295-1.63 3.295.376.663c.73 1.29 1.532 3.282 1.912 4.752l.082.32 3.296 1.117c1.813.614 3.39 1.159 3.507 1.21.21.092.212.106.212 2.162 0 1.412-.033 2.09-.104 2.135-.057.035-1.634.583-3.504 1.217-1.87.634-3.408 1.19-3.419 1.237-.01.046-.176.591-.366 1.211a18.147 18.147 0 0 1-1.52 3.558c-.226.4-.41.776-.41.835 0 .142.333.84 1.887 3.954l1.295 2.595-1.488 1.552-1.489 1.552-3.246-1.626c-1.786-.894-3.295-1.625-3.354-1.625-.059 0-.267.1-.463.225-1.037.655-2.762 1.384-4.322 1.827l-.922.262-1.177 3.531-1.177 3.532-2.132.025c-1.655.02-2.142-.001-2.175-.094-.024-.066-.544-1.625-1.155-3.465-.61-1.84-1.158-3.394-1.215-3.453-.057-.059-.57-.243-1.14-.41a16.848 16.848 0 0 1-3.296-1.344c-.363-.199-.8-.433-.973-.52l-.314-.159-3.238 1.647-3.238 1.647-1.544-1.54-1.544-1.541 1.648-3.258 1.649-3.259-.303-.526c-.627-1.088-1.187-2.362-1.659-3.77l-.487-1.454-1.827-.625c-1.004-.345-2.557-.876-3.45-1.181l-1.625-.555v-4.274l.26-.105c.142-.058 1.697-.586 3.456-1.174l3.199-1.069.264-.92c.347-1.209 1.095-3.007 1.675-4.03l.465-.82-1.599-3.213c-.879-1.766-1.598-3.263-1.598-3.325 0-.118 2.82-2.99 2.936-2.99.037 0 1.53.719 3.32 1.598l3.253 1.597 1.155-.603a19.652 19.652 0 0 1 3.705-1.508c.456-.132.846-.257.867-.279Zm4.54 34.504c8.575 0 15.527-6.952 15.527-15.528 0-8.575-6.952-15.527-15.527-15.527-8.576 0-15.528 6.952-15.528 15.527 0 8.576 6.952 15.528 15.528 15.528Z"
      fill="#3A3A3A"
    />
    <path
      d="m94.673 117.988-1.418-1.454c-3.973-5.773-4.407-22.46-7.188-22.962-9.646-10.353-9.76-11.172-12.799-14.06v16.521l19.987 20.501c.43.623.9 1.119 1.418 1.454ZM51.863 117.988l1.418-1.454c3.973-5.773 4.407-22.46 7.188-22.962 9.646-10.353 9.76-11.172 12.799-14.06v16.521l-19.987 20.501c-.43.623-.9 1.119-1.418 1.454Z"
      fill="#3A3A3A"
    />
  </svg>
);

export default RootFooter;
