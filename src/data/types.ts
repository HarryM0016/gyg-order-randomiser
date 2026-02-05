/**
 * Base interface for all carousel slide items
 * All category types must conform to this interface
 */
export interface SlideItem {
  image: string;
  name: string;
  index: number;
}
