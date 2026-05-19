// pako-inline.js - GZIP decompression using CompressionStream API
// ไม่มี CDN dependency - ใช้ native browser API

window.pako = {
  ungzip: async function(uint8Array, options) {
    try {
      // ใช้ DecompressionStream API
      if (typeof DecompressionStream === 'undefined') {
        throw new Error('CompressionStream API not supported in this browser');
      }
      
      const ds = new DecompressionStream('gzip');
      const writer = ds.writable.getWriter();
      const reader = ds.readable.getReader();
      
      // Write data
      await writer.write(uint8Array);
      await writer.close();
      
      // Read decompressed data
      const chunks = [];
      let done = false;
      while (!done) {
        const { value, done: isDone } = await reader.read();
        done = isDone;
        if (value) chunks.push(value);
      }
      
      // Combine chunks
      const totalLength = chunks.reduce((sum, chunk) => sum + chunk.length, 0);
      const result = new Uint8Array(totalLength);
      let offset = 0;
      for (const chunk of chunks) {
        result.set(chunk, offset);
        offset += chunk.length;
      }
      
      // Convert to string if requested
      if (options && options.to === 'string') {
        return new TextDecoder().decode(result);
      }
      return result;
    } catch (error) {
      console.error('[pako] Error:', error.message);
      throw new Error(`Decompression failed: ${error.message}`);
    }
  }
};

console.log('[pako-inline] ✅ Loaded - DecompressionStream ready');

