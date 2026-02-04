interface HeaderProps {
  fullName: string;
  location: string;
  profilePicture: string;
}

export default function Header({ fullName, location, profilePicture }: HeaderProps) {
  return (
    <header className="flex items-center gap-4">
      <img 
        src={profilePicture} 
        alt={fullName}
        className="w-32 h-32 rounded-full object-cover"
      />
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{fullName}</h1>
        <p className="text-gray-600">{location}</p>
      </div>
    </header>
  );
}