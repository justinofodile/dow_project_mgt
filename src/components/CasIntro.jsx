import React from "react";

const CasIntro = () => {
  return (
    <div className="flex gap-3 max-w-6xl mx-auto mt-20 shadow-md p-3 rounded-sm">
      <p className="text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eaque
        repellat sapiente consectetur! Commodi molestias quisquam aperiam autem
        corporis, veniam tenetur aspernatur numquam ipsum officia! Molestias
        praesentium sed id nihil. In fugiat, doloremque recusandae minus
        expedita ea odio doloribus deleniti quia, accusantium voluptate,
        exercitationem sed? Accusantium perspiciatis magni quam enim dolor
        aperiam! Provident molestiae veritatis quas in iure illo minus! Quos
        temporibus odio ut dicta ratione nihil, enim maxime dignissimos. Quo
        asperiores minus exercitationem aspernatur est quae rem dolores vero
        magni? Doloremque modi provident, quae praesentium libero quis incidunt
        totam?
      </p>
      <div className="flex flex-col text-center space-y-0">
        <img
          className="w-80"
          src="https://airforce.mil.ng/uploads/news/images/thumb_398014521IMG-20230829-WA0015.jpg"
          alt="Nigerian Air Force CAS"
        />
        <h3>Air Marshal</h3>
        <div className="space-x-1 font-bold">
          <span> HB ABUBAKAR</span>
          <small className="text-[7.5px]  ">
            DFS GSS psc fdc FCMH FCM MAID MNIM MCIPM FISPN
          </small>
        </div>
        <h4>CHIEF OF AIR STAFF</h4>
        <h4>NIGERIAN AIR FORCE</h4>
      </div>
    </div>
  );
};

export default CasIntro;
