export default function healthCheck(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { message: string }): void; new (): any };
    };
  }
) {
  res.status(200).json({ message: 'Movie web app is Good' });
}
