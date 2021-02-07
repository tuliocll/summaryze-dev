import Image from "next/image";

function HomeContainer() {
  return (
    <div className="home--container">
      <div className="home--container--primary">
        <Image src="/logo.svg" width={500} height={100} />
      </div>

      <div className="home--container--secondary">
        <Image src="/images/vector.svg" width={400} height={300} />
      </div>
    </div>
  );
}

export default HomeContainer;
