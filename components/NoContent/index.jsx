import Image from "next/image";

function NoContent() {
  return (
    <div className="no-data">
      <Image src="/images/no-data.svg" width={300} height={150} />
      <p>Theres no data</p>
      <p>Put a url and generate!</p>
    </div>
  );
}

export default NoContent;
