import Card from "../ui/Card";
import Container from "../ui/Container";

const BlogPosts = () => {
  const posts = [
    {
      image: "https://via.placeholder.com/400x300",
      date: "22 Oct 2024",
      category: "Business",
      title: "Workflow upgraded-see what's new in managing work. Today!",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      author: {
        name: "John Carter",
        avatar: "https://via.placeholder.com/40",
      },
    },
    {
      image: "https://via.placeholder.com/400x300",
      date: "20 Oct 2024",
      category: "Technology",
      title: "In charge whole Manage the team. Today!",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      author: {
        name: "Jane Doe",
        avatar: "https://via.placeholder.com/40",
      },
    },
    {
      image: "https://via.placeholder.com/400x300",
      date: "18 Oct 2024",
      category: "Marketing",
      title: "Things to do before and after we start development project",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      author: {
        name: "Mike Johnson",
        avatar: "https://via.placeholder.com/40",
      },
    },
    {
      image: "https://via.placeholder.com/400x300",
      date: "15 Oct 2024",
      category: "Design",
      title: "Things we must avoid during product development",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor.",
      author: {
        name: "Sarah Williams",
        avatar: "https://via.placeholder.com/40",
      },
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container maxWidth="7xl" paddingX="xl">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-4xl font-bold text-gray-600">
            Our Latest Blog Posts
          </h2>
          <a
            href="/blog"
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            View all posts
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Card key={index} hover className="overflow-hidden p-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-primary">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {post.date}
                </div>
                <h3 className="font-semibold text-gray-600 mb-2 line-clamp-2 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center pt-4 border-t border-gray-100">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {post.author.name}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogPosts;
