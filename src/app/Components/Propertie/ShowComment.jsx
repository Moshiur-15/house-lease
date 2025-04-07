import React from "react";

const ShowComment = () => {
  const comments = [
    {
      id: 1,
      name: "Laura Dern",
      date: "13. March 2023",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore vix etiam mea id erat essent complectitur vis.",
    },
    {
      id: 2,
      name: "Harold Nelson",
      date: "13. March 2023",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore vix etiam mea id erat essent complectitur vis.",
    },
    {
      id: 3,
      name: "test",
      date: "7. April 2025",
      avatar: null,
      comment:
        "Quickly disintermediate multidisciplinary experiences through highly efficient materials. Conveniently empower B2B architectures with resource sucking schemas. Globally synthesize fully tested experiences whereas effective expertise. Phosfluorescently underwhelm cooperative benefits for cost effective schemas. Progressively disseminate cross-platform value rather than cross-unit opportunities.",
    },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6 uppercase">
        {comments.length} Comments
      </h2>
      {comments.map((item, index) => (
        <div
          key={item.id}
          className={`flex gap-4 mb-8 ${index % 2 === 0 ? "pl-0" : "pl-8 lg:pl-16"}`}
        >
          {/* Avatar */}
          {item.avatar ? (
            <img
              src={item.avatar}
              alt={item.name}
              className="w-14 h-14 rounded-full object-cover"
            />
          ) : (
            <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-white text-xl font-bold">
              {item.name[0].toUpperCase()}
            </div>
          )}

          {/* Comment Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-bold uppercase">{item.name}</h3>
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
            <p className="text-gray-700 my-2 text-justify border-b border-gray-300 leading-7 pb-4">
              {item.comment}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowComment;
