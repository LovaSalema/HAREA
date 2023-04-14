import stream from 'stream'

export const buffer_to_stream = (buffer: Buffer) => { 
    const s = new stream.Readable();
    s.push(buffer);
    s.push(null);
  
    return s;
}
