/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

export default function TopBar() {
  return (
    <div className="w-full bg-black text-white py-2 px-4 text-center overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-[10px] sm:text-xs font-medium tracking-widest uppercase"
      >
        FREE SHIPPING ON PREPAID ORDER
      </motion.p>
    </div>
  );
}
