const e=`declare module "string_decoder" {
  class StringDecoder {
    constructor(encoding?: BufferEncoding);
    write(buffer: Buffer): string;
    end(buffer?: Buffer): string;
  }
}
`;export{e as default};
