interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  condition: string;
  badge1: string;
  badge2: string;
}

export default function ImgCard({
  imageSrc,
  title,
  description,
  condition,
  badge1,
  badge2,
}: CardProps) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm border border-base-300">
      <figure>
        <img src={imageSrc} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{condition}</div>
        </h2>
        <p className="text-sm text-base-content/70">{description}</p>

        {/* Bagian Actions Tombol & Badge Dinamis */}
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex gap-2">
            <div className="badge badge-outline">{badge1}</div>
            <div className="badge badge-outline">{badge2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
