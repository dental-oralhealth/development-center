// pako-inline.js - Minimal GZIP decompression
// ใช้ built-in browser Compression API แทน pako

window.pako = {
  ungzip: function(uint8Array, options) {
    // ใช้ DecompressionStream API ที่ built-in ใน browser สมัยใหม่
    if (typeof CompressionStream !== 'undefined') {
      // Async version - ต้องรอให้ complete
      return new Promise((resolve, reject) => {
        try {
          const ds = new DecompressionStream('gzip');
          const writer = ds.writable.getWriter();
          const reader = ds.readable.getReader();
          
          writer.write(uint8Array).then(() => writer.close()).catch(reject);
          
          const chunks = [];
          const read = () => {
            reader.read().then(({ done, value }) => {
              if (done) {
                const result = new Uint8Array(chunks.reduce((a, b) => a + b.length, 0));
                let pos = 0;
                chunks.forEach(chunk => {
                  result.set(chunk, pos);
                  pos += chunk.length;
                });
                
                const str = new TextDecoder().decode(result);
                if (options && options.to === 'string') {
                  resolve(str);
                } else {
                  resolve(result);
                }
              } else {
                chunks.push(value);
                read();
              }
            }).catch(reject);
          };
          read();
        } catch (e) {
          reject(e);
        }
      });
    } else {
      // Fallback: simple base64 decode สำหรับ browser เก่า (ไม่ได้ compress แต่ fallback)
      throw new Error('CompressionStream API not supported - please use a modern browser (Chrome, Edge, Firefox)');
    }
  }
};
